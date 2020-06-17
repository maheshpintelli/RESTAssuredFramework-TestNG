package resources;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Properties;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Utils {
	public static RequestSpecification reqBuilder;
	static String filePath = "./src/test/java/resources/global.properties";
	String responseBody;

	public RequestSpecification requestSpecification() throws IOException {
		if (reqBuilder == null) {
			PrintStream logs = new PrintStream(new FileOutputStream("logging.txt"));
			reqBuilder = new RequestSpecBuilder().setBaseUri(getGlobalValues("baseUrl"))
					.addFilter(RequestLoggingFilter.logRequestTo(logs)).setContentType(ContentType.JSON).build();
			return reqBuilder;
		}
		return reqBuilder;
	}

	public static String getGlobalValues(String key) throws IOException {
		Properties prop = new java.util.Properties();
		FileInputStream fis = new FileInputStream(filePath);
		prop.load(fis);
		return prop.getProperty(key);
	}

	public String getJSONPath(Response response, String key) {
		responseBody = response.asString();
		JsonPath js = new JsonPath(responseBody);
		return js.get(key).toString();
	}

}
