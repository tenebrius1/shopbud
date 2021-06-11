from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


def checkAmazonPrice(url):
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-gpu')
    options.add_argument('--disable-software-rasterizer')
    options.add_argument('--log-level=2')
    driver = webdriver.Chrome(options=options)
    driver.get(url)
    timeout = 1

    try:
        found = False
        price = None
        while not found:
            try:
                WebDriverWait(driver, timeout).until(EC.visibility_of_element_located(
                    (By.ID, 'priceblock_ourprice')))
            except TimeoutException:
                driver.refresh()
                continue
            price = driver.find_element(
                By.ID, 'priceblock_ourprice')
            found = True
        return price.text
    except TimeoutException:
        pass
    finally:
        driver.quit()
