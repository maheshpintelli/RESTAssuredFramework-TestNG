package stepDefinitions;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

import java.io.IOException;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import resources.APIResources;
import resources.TestData;
import resources.Utils;

public class AddBook extends Utils {
	Response response;
	RequestSpecification request;
	ResponseSpecification respBuilder;
	TestData testdata = new TestData();
	static String ID;
	static String author;
	String responseBody;

	@Given("^Addbook Payload with \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void addbook_Payload_with(String name, String isbn, String aisle, String author) throws Throwable {
		request = given().spec(requestSpecification()).body(testdata.addBookPayload(name, isbn, aisle, author));
	}

	@When("^User calls \"([^\"]*)\" API with \"([^\"]*)\" HTTP request$")
	public void user_calls_API_with_HTTP_request(String resource, String method) throws Throwable {
		APIResources resourceAPI = APIResources.valueOf(resource);
		System.out.println("API Resource : " + resourceAPI.getResource());
		respBuilder = new ResponseSpecBuilder().expectContentType(ContentType.JSON).build();
		if (method.equalsIgnoreCase("POST"))
			response = request.when().post(resourceAPI.getResource());
		else if (method.equalsIgnoreCase("GET"))
			response = request.when().get(resourceAPI.getResource());
		responseBody = response.asString();
		System.out.println("Response : " + responseBody);
	}

	@Then("^The API call is success with status (\\d+)$")
	public void the_API_call_is_success_with_status(int expectedstatuscode) throws Throwable {
		assertEquals(response.getStatusCode(), expectedstatuscode);
	}

	@Then("^\"([^\"]*)\" in response body is \"([^\"]*)\"$")
	public void in_response_body_is(String keyValue, String expectedValue) throws Throwable {
		assertEquals(getJSONPath(response, keyValue), expectedValue);
	}

	@Then("^verify ID created maps to \"([^\"]*)\" using \"([^\"]*)\"$")
	public void verify_ID_created_maps_to_using(String actualName, String resource) throws Throwable {
		ID = getJSONPath(response, "ID");
		request = given().spec(requestSpecification()).queryParam("ID", ID);
		user_calls_API_with_HTTP_request(resource, "GET");
		String expectedName = getJSONPath(response, "[0].book_name");
		assertEquals(actualName, expectedName);
	}

	@And("^verify ID created maps to \"([^\"]*)\" using \"([^\"]*)\" API$")
	public void verify_ID_created_maps_to_using_API(String actualName, String resource) throws Throwable {
		author = getJSONPath(response, "[0].author");
		request = given().spec(requestSpecification()).queryParam("AuthorName", author);
		user_calls_API_with_HTTP_request(resource, "GET");
		String expectedName = getJSONPath(response, "[0].book_name");
		assertEquals(actualName, expectedName);
	}

	// ---------------------------------

	@Given("^Valid Author Name is given$")
	public void valid_Author_Name_is_given() throws Throwable {
		request = given().spec(requestSpecification()).queryParam("AuthorName", author);
	}

	@Given("^Invalid Author Name is given$")
	public void invalid_Author_Name_is_given() throws IOException {
		request = given().spec(requestSpecification()).queryParam("AuthorName", "Invalid Author Name");
	}

	@Given("^Valid BookID is given$")
	public void valid_BookID_is_given() throws IOException {
		request = given().spec(requestSpecification()).queryParam("ID", ID);
	}

	@Given("^Invalid BookID is given$")
	public void invalid_BookID_is_given() throws IOException {
		request = given().spec(requestSpecification()).queryParam("ID", "0987IVID");
	}

	@Given("^DeleteBook Payload$")
	public void deletebook_Payload() throws IOException {
		request = given().spec(requestSpecification()).body(testdata.deleteBookPayload(ID));
	}

	@Given("^DeleteBook Payload with already deleted BookID$")
	public void deletebook_Payload_with_already_deleted_BookID() throws IOException {
		request = given().spec(requestSpecification()).body(testdata.deleteBookPayload(ID));
	}

	@Given("^DeleteBook Payload with blank BookID$")
	public void deletebook_Payload_with_blank_BookID() throws IOException {
		request = given().spec(requestSpecification()).body(testdata.deleteBookPayload(""));
	}
}
