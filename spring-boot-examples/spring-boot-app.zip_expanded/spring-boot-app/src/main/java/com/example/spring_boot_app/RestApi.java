package com.example.spring_boot_app;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/*
 * RestController - to create REST API
 * RequestMapping - to map the request with URL
 * GetMapping, PostMapping, PutMapping, DeleteMapping
 */
@RestController
@RequestMapping("/api/v1")
public class RestApi {

	/*
	 *  a controller method that returns a text to the client
	 *  it must have an http-mapping 
	 *  client must use url: http://ip:port/api/v1 with HTTP GET
	 */
	@GetMapping("/{id}/{name}")
	public ResponseEntity<Object> greet(@PathVariable("id") int empId, @PathVariable String name) {
		if(Math.random() > 0.5) {
			return ResponseEntity.status(201).body("success message from get: "+empId+" "+name);
		} else {
			Map<String, String> map = new HashMap<String, String>();
			map.put("message", "Something went wrong from get");
			return ResponseEntity.status(404).body(map);
		}
	}
	@PostMapping
	public ResponseEntity<Object> greet2(@RequestBody Profile profile) {
		Map<String, Object> map = new HashMap<>();
		map.put("message", "Successfully stored");
		map.put("profile", profile);
		return ResponseEntity.status(200).body(map);
	}
}
