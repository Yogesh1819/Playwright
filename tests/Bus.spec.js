const { test, expect } = require('@playwright/test');

test('Handle Red Bus Calendar', async ({ page }) => {
    await page.goto('https://www.redbus.in/');

    // Click on the calendar to open the date picker
    await page.locator('//div[@id="onwardCal"]').click();

    const targetMonthYear = 'Feb 2025';

    // Loop to find the correct month and year
    while (true) {
        // Get the visible month and year from the calendar
        const currentMonthYear = await page.locator('.DayNavigator__Header-qj8jdz-3').textContent();

        if (currentMonthYear.trim() === targetMonthYear) {
            break; // Exit loop if the desired month and year are found
        }

        // Click the next button to navigate to the next month
        await page.locator('.DayNavigator__IconBlock-qj8jdz-2[aria-label="Next"]').click();
    }

    // Select a specific date (e.g., 15th of the selected month)
    await page.locator('//td[text()="15"]').click();

    // Pause to observe interactions
    await page.pause();
});
