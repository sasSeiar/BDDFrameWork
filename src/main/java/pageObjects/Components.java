package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import constants.ConfigFileReader;

public class Components extends ConfigFileReader {
	
	

	public Components(WebDriver driver) {

		PageFactory.initElements(driver, this);
	
	}
	
	@FindBy(how = How.XPATH, using = "//a[text()='Components']")

	private WebElement Components;
	
	@FindBy(how = How.XPATH, using = "//a[text()='Mice and Trackballs (0)']")

	private WebElement miceAndTrackballs;
	
	@FindBy(how = How.XPATH, using = "//a[text()='Monitors (2)']")

	private WebElement monitors;
	
	@FindBy(how = How.XPATH, using = "//a[text()='Printers (0)']")

	private WebElement printers;
	
	@FindBy(how = How.XPATH, using = "//a[text()='Scanners (0)']")

	private WebElement scanners;
	
	@FindBy(how = How.XPATH, using = "//a[text()='Web Cameras (0)']")

	private WebElement webCameras;
	
	
	
	
	
	
	
	
	
/////////////////////////////////////////////
}
