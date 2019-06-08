package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import constants.ConfigFileReader;

public class Software extends ConfigFileReader {

	
	public Software(WebDriver driver) {

		PageFactory.initElements(driver, this);
	
	}
	
	@FindBy(how = How.XPATH, using = "//a[text()='Software']")

	private WebElement software;
	
	
	
	
	
	
	
	
	
	
}
