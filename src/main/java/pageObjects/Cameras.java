package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import constants.ConfigFileReader;

public class Cameras extends ConfigFileReader {

	
	public Cameras(WebDriver driver) {

		PageFactory.initElements(driver, this);
	
	}
	
	@FindBy(how = How.XPATH, using = "//a[text()='Cameras']")

	private WebElement cameras;
	
	
	
	
	
}
