const { test, expect, request } = require('@playwright/test');
const { adminToken, userToken } = require('../shared/login');

test.describe('GET API Tests', () => {
    test('/api/books - Admin Retrieve Book List', async () => {
        const apiContext = await request.newContext();

        // Admin gets book list
        //const response = await request.get('api/books')
        const response = await request.get('api/books')
        expect(response.ok()).toBeTruthy();
        const books = await response.json();

        expect(Array.isArray(books)).toBeTruthy();
        expect(books.length).toBeGreaterThan(0);
        console.log('Admin Books retrieved:', books);
    });

    test('/api/books - User Retrieve Book List', async () => {
        const apiContext = await request.newContext();

        // User gets book list
        const response = await apiContext.get('http://localhost:7081/api/books', {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        });

        expect(response.ok()).toBeTruthy();
        const books = await response.json();

        expect(Array.isArray(books)).toBeTruthy();
        expect(books.length).toBeGreaterThan(0);
        console.log('User Books retrieved:', books);
    });
});
