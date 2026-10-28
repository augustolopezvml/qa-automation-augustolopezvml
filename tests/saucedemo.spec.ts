import { test, expect } from '@playwright/test';

test('compra completa', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Products')).toBeVisible();

  const producto = page.locator('.inventory_item_name').first();
  const nombreProducto = await producto.textContent();

  await page.getByRole('button', { name: 'Add to cart' }).first().click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.locator('.shopping_cart_link').click();

  await expect(page.getByText(nombreProducto!)).toBeVisible();

  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByPlaceholder('First Name').fill('Augusto');

  await page.getByPlaceholder('Last Name').fill('Lopez');

  await page.getByPlaceholder('Zip/Postal Code').fill('4000');

  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByText('Checkout: Overview')).toBeVisible();

  await expect(page.getByText(nombreProducto!)).toBeVisible(); 

  await page.getByRole('button', { name: 'Finish' }).click();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();

});

