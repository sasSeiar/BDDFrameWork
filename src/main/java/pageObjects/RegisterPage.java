package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import constants.ConfigFileReader;

public class RegisterPage extends ConfigFileReader {
	
	
	@FindBy(how = How.XPATH, using = "//input[@name = 'firstname']")

	private WebElement firstNameField;
	
	@FindBy(how = How.XPATH, using = "//input[@name = 'lastname']")

	private WebElement lastNameField;
	
	@FindBy(how = How.XPATH, using = "//input[@name = 'email']")

	private WebElement emailField;
	
	@FindBy(how = How.XPATH, using = "//input[@name = 'telephone']")

	private WebElement telephoneField;
	
	@FindBy(how = How.XPATH, using = "//input[@name = 'password']")

	private WebElement passwordeField;
	
	@FindBy(how = How.XPATH, using = "//input[@name = 'confirm']")

	private WebElement confirmPasswordeField;

	
	@FindBy(how = How.XPATH, using = "(//input[@name = 'newsletter'])[1]")

	private WebElement yesRadioButton;
	
	@FindBy(how = How.XPATH, using = "(//input[@name = 'newsletter'])[2]")

	private WebElement noRadioButton;
	
	@FindBy(how = How.XPATH, using = "//input[@name = 'agree']")

	private WebElement privacyPolicy;
	
	@FindBy(how = How.XPATH, using = "//input[@type = 'submit']")

	private WebElement continueButton;
	
	
	
	
	
	
}
