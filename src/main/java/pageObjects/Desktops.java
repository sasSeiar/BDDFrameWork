package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import constants.ConfigFileReader;

public class Desktops extends ConfigFileReader {
	
	
	public Desktops(WebDriver driver) {

		PageFactory.initElements(driver, this);
	
	}
	
	@FindBy(how = How.XPATH, using = "//a[text()='Desktops']")

	private WebElement dsktops;
	
	@FindBy(how = How.XPATH, using = "//a[text()='PC (0)']")

	private WebElement pC;
	
	@FindBy(how = How.XPATH, using = "//a[text()='Mac (1)']")

	private WebElement mAc;
	
	@FindBy(how = How.XPATH, using = "//a[text()='Show All Desktops']")

	private WebElement showAllDesktops;
	
	
	
	
	
	
	
	
	
////////////////////////////////////////////////
}
