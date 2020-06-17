$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("library.feature");
formatter.feature({
  "line": 1,
  "name": "Validating library API",
  "description": "",
  "id": "validating-library-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify if Book is being Successfully added using Addbook API",
  "description": "",
  "id": "validating-library-api;verify-if-book-is-being-successfully-added-using-addbook-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Addbook Payload with \"\u003cname\u003e\" \"\u003cisbn\u003e\" \"\u003caisle\u003e\" \"\u003cauthor\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User calls \"addBook\" API with \"POST\" HTTP request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The API call is success with status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "\"Msg\" in response body is \"successfully added\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify ID created maps to \"\u003cname\u003e\" using \"getBookByID\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify ID created maps to \"\u003cname\u003e\" using \"getBookByAutorName\" API",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "validating-library-api;verify-if-book-is-being-successfully-added-using-addbook-api;",
  "rows": [
    {
      "cells": [
        "name",
        "isbn",
        "aisle",
        "author"
      ],
      "line": 12,
      "id": "validating-library-api;verify-if-book-is-being-successfully-added-using-addbook-api;;1"
    },
    {
      "cells": [
        "Book1",
        "10982",
        "1234",
        "Mahesh1"
      ],
      "line": 13,
      "id": "validating-library-api;verify-if-book-is-being-successfully-added-using-addbook-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify if Book is being Successfully added using Addbook API",
  "description": "",
  "id": "validating-library-api;verify-if-book-is-being-successfully-added-using-addbook-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Addbook Payload with \"Book1\" \"10982\" \"1234\" \"Mahesh1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User calls \"addBook\" API with \"POST\" HTTP request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The API call is success with status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "\"Msg\" in response body is \"successfully added\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify ID created maps to \"Book1\" using \"getBookByID\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify ID created maps to \"Book1\" using \"getBookByAutorName\" API",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Book1",
      "offset": 22
    },
    {
      "val": "10982",
      "offset": 30
    },
    {
      "val": "1234",
      "offset": 38
    },
    {
      "val": "Mahesh1",
      "offset": 45
    }
  ],
  "location": "AddBook.addbook_Payload_with(String,String,String,String)"
});
formatter.result({
  "duration": 1998036600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addBook",
      "offset": 12
    },
    {
      "val": "POST",
      "offset": 31
    }
  ],
  "location": "AddBook.user_calls_API_with_HTTP_request(String,String)"
});
formatter.result({
  "duration": 6189536900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "duration": 3962500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Msg",
      "offset": 1
    },
    {
      "val": "successfully added",
      "offset": 27
    }
  ],
  "location": "AddBook.in_response_body_is(String,String)"
});
formatter.result({
  "duration": 1191862300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Book1",
      "offset": 27
    },
    {
      "val": "getBookByID",
      "offset": 41
    }
  ],
  "location": "AddBook.verify_ID_created_maps_to_using(String,String)"
});
formatter.result({
  "duration": 21136766300,
  "error_message": "java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:121)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:326)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:495)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:452)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$3.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1451)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1200)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:140)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat stepDefinitions.AddBook.user_calls_API_with_HTTP_request(AddBook.java:43)\r\n\tat stepDefinitions.AddBook.verify_ID_created_maps_to_using(AddBook.java:62)\r\n\tat ✽.And verify ID created maps to \"Book1\" using \"getBookByID\"(library.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Book1",
      "offset": 27
    },
    {
      "val": "getBookByAutorName",
      "offset": 41
    }
  ],
  "location": "AddBook.verify_ID_created_maps_to_using_API(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Verify Book is getting retrieved using valid getBookByAutorName API",
  "description": "",
  "id": "validating-library-api;verify-book-is-getting-retrieved-using-valid-getbookbyautorname-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Valid Author Name is given",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User calls \"getBookByAutorName\" API with \"GET\" HTTP request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "The API call is success with status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AddBook.valid_Author_Name_is_given()"
});
formatter.result({
  "duration": 147171000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getBookByAutorName",
      "offset": 12
    },
    {
      "val": "GET",
      "offset": 42
    }
  ],
  "location": "AddBook.user_calls_API_with_HTTP_request(String,String)"
});
formatter.result({
  "duration": 21024441900,
  "error_message": "java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:121)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:326)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:495)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:452)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1451)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1200)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:140)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat stepDefinitions.AddBook.user_calls_API_with_HTTP_request(AddBook.java:43)\r\n\tat ✽.When User calls \"getBookByAutorName\" API with \"GET\" HTTP request(library.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Verify Book is getting retrieved using invalid getBookByAutorName API",
  "description": "",
  "id": "validating-library-api;verify-book-is-getting-retrieved-using-invalid-getbookbyautorname-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "Invalid Author Name is given",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User calls \"getBookByAutorName\" API with \"GET\" HTTP request",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The API call is success with status 404",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "\"msg\" in response body is \"The book by requested bookid / author name does not exists!\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddBook.invalid_Author_Name_is_given()"
});
formatter.result({
  "duration": 7024800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getBookByAutorName",
      "offset": 12
    },
    {
      "val": "GET",
      "offset": 42
    }
  ],
  "location": "AddBook.user_calls_API_with_HTTP_request(String,String)"
});
formatter.result({
  "duration": 21036865900,
  "error_message": "java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:121)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:326)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:495)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:452)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1451)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1200)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:140)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat stepDefinitions.AddBook.user_calls_API_with_HTTP_request(AddBook.java:43)\r\n\tat ✽.When User calls \"getBookByAutorName\" API with \"GET\" HTTP request(library.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "msg",
      "offset": 1
    },
    {
      "val": "The book by requested bookid / author name does not exists!",
      "offset": 27
    }
  ],
  "location": "AddBook.in_response_body_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Verify Book is getting retrieved using valid getBookByID API",
  "description": "",
  "id": "validating-library-api;verify-book-is-getting-retrieved-using-valid-getbookbyid-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "Valid BookID is given",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User calls \"getBookByID\" API with \"GET\" HTTP request",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "The API call is success with status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AddBook.valid_BookID_is_given()"
});
formatter.result({
  "duration": 3455100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getBookByID",
      "offset": 12
    },
    {
      "val": "GET",
      "offset": 35
    }
  ],
  "location": "AddBook.user_calls_API_with_HTTP_request(String,String)"
});
formatter.result({
  "duration": 21029119200,
  "error_message": "java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:121)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:326)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:495)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:452)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1451)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1200)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:140)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat stepDefinitions.AddBook.user_calls_API_with_HTTP_request(AddBook.java:43)\r\n\tat ✽.When User calls \"getBookByID\" API with \"GET\" HTTP request(library.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Verify Book is getting retrieved using invalid getBookByID API",
  "description": "",
  "id": "validating-library-api;verify-book-is-getting-retrieved-using-invalid-getbookbyid-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "Invalid BookID is given",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User calls \"getBookByID\" API with \"GET\" HTTP request",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "The API call is success with status 404",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "\"msg\" in response body is \"The book by requested bookid / author name does not exists!\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddBook.invalid_BookID_is_given()"
});
formatter.result({
  "duration": 7825700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getBookByID",
      "offset": 12
    },
    {
      "val": "GET",
      "offset": 35
    }
  ],
  "location": "AddBook.user_calls_API_with_HTTP_request(String,String)"
});
formatter.result({
  "duration": 7520173400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "duration": 263500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "msg",
      "offset": 1
    },
    {
      "val": "The book by requested bookid / author name does not exists!",
      "offset": 27
    }
  ],
  "location": "AddBook.in_response_body_is(String,String)"
});
formatter.result({
  "duration": 37005200,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify if Delete Book functionality is working",
  "description": "",
  "id": "validating-library-api;verify-if-delete-book-functionality-is-working",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "DeleteBook Payload",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User calls \"deleteBook\" API with \"POST\" HTTP request",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "The API call is success with status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "\"msg\" in response body is \"book is successfully deleted\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddBook.deletebook_Payload()"
});
formatter.result({
  "duration": 1686900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deleteBook",
      "offset": 12
    },
    {
      "val": "POST",
      "offset": 34
    }
  ],
  "location": "AddBook.user_calls_API_with_HTTP_request(String,String)"
});
formatter.result({
  "duration": 1032581200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "duration": 173700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "msg",
      "offset": 1
    },
    {
      "val": "book is successfully deleted",
      "offset": 27
    }
  ],
  "location": "AddBook.in_response_body_is(String,String)"
});
formatter.result({
  "duration": 16712100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "",
  "description": "Verify getting error message and 404 status if user trying to delete already deleted Book",
  "id": "validating-library-api;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "DeleteBook Payload with already deleted BookID",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User calls \"deleteBook\" API with \"POST\" HTTP request",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "The API call is success with status 404",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "\"msg\" in response body is \"Delete Book operation failed, looks like the book doesnt exists\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddBook.deletebook_Payload_with_already_deleted_BookID()"
});
formatter.result({
  "duration": 1945300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deleteBook",
      "offset": 12
    },
    {
      "val": "POST",
      "offset": 34
    }
  ],
  "location": "AddBook.user_calls_API_with_HTTP_request(String,String)"
});
formatter.result({
  "duration": 21019230100,
  "error_message": "java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:121)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:326)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:350)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$2.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1181)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:140)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat stepDefinitions.AddBook.user_calls_API_with_HTTP_request(AddBook.java:41)\r\n\tat ✽.When User calls \"deleteBook\" API with \"POST\" HTTP request(library.feature:46)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "msg",
      "offset": 1
    },
    {
      "val": "Delete Book operation failed, looks like the book doesnt exists",
      "offset": 27
    }
  ],
  "location": "AddBook.in_response_body_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 50,
  "name": "",
  "description": "Verify getting error message and 404 status if user trying to delete book by blank BookID",
  "id": "validating-library-api;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "DeleteBook Payload with blank BookID",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User calls \"deleteBook\" API with \"POST\" HTTP request",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "The API call is success with status 404",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "\"msg\" in response body is \"Delete Book operation failed, looks like the book doesnt exists\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddBook.deletebook_Payload_with_blank_BookID()"
});
formatter.result({
  "duration": 1632900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deleteBook",
      "offset": 12
    },
    {
      "val": "POST",
      "offset": 34
    }
  ],
  "location": "AddBook.user_calls_API_with_HTTP_request(String,String)"
});
formatter.result({
  "duration": 21021640900,
  "error_message": "java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:121)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:326)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:350)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$2.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1181)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:140)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1029)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:816)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat stepDefinitions.AddBook.user_calls_API_with_HTTP_request(AddBook.java:41)\r\n\tat ✽.When User calls \"deleteBook\" API with \"POST\" HTTP request(library.feature:53)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 36
    }
  ],
  "location": "AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "msg",
      "offset": 1
    },
    {
      "val": "Delete Book operation failed, looks like the book doesnt exists",
      "offset": 27
    }
  ],
  "location": "AddBook.in_response_body_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
});