import { test, expect } from '@playwright/test';

test('verificar título de TodoMVC', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await expect(page).toHaveTitle(/TodoMVC/);
});

test('agregar una nueva tarea', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  const agregarTarea = page.getByPlaceholder('What needs to be done?');
  await agregarTarea.fill('Ver el partido de Boquita');
  await agregarTarea.press('Enter');
  await expect(page.getByText('Ver el partido de Boquita')).toBeVisible();
});

test('marcar una tarea como completada', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const agregarTarea = page.getByPlaceholder('What needs to be done?');

  await agregarTarea.fill('Ver el partido de Boquita');

  await agregarTarea.press('Enter');

  await expect(page.getByText('Ver el partido de Boquita')).toBeVisible();

  const checkbox = page.getByRole('checkbox', {name: 'Toggle Todo'});

  await checkbox.check();

  await expect(checkbox).toBeChecked();
});