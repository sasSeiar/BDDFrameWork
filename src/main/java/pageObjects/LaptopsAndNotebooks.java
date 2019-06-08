package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import constants.ConfigFileReader;

public class LaptopsAndNotebooks extends ConfigFileReader {
	
	
	public LaptopsAndNotebooks(WebDriver driver) {

		PageFactory.initElements(driver, this);
	
	}
	
	@FindBy(how = How.XPATH, using = "//a[text()='Laptops & Notebooks']")

	private WebElement laptopsAndNotebooks;
	
	@FindBy(how = How.XPATH, using = "//a[text()='Macs (0)']")

	private WebElement macs;
	
	@FindBy(how = How.XPATH, using = "//a[text()='Windows (0)']")

	private WebElement windows;
	
	
	@FindBy(how = How.XPATH, using = "//a[text()='Show All Laptops & Notebooks']")

	private WebElement showAllLaptopsAndNotebooks;
	
	

	
	
	
	
////////////////////////////////
}
