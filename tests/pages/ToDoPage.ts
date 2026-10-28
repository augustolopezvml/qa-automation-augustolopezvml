import {Locator, Page} from "@playwright/test";

class TodoPage{
    readonly page: Page;
    readonly inputTask: Locator;
    readonly checkboxTask: Locator;
    readonly url: string = "https://demo.playwright.dev/todomvc"

    constructor (page:Page) {
        this.page = page;
        this.inputTask = this.page.getByPlaceholder('What needs to be done?');
        this.checkboxTask = this.page.getByRole('checkbox', {name: 'Toggle Todo'});

    };

    public async openPage (): Promise<void> {
        await this.page.goto(this.url);

    };

    public async fillTask (task: string): Promise <void> {
        await this.inputTask.fill(task);
        await this.inputTask.press("Enter");
    };
}

