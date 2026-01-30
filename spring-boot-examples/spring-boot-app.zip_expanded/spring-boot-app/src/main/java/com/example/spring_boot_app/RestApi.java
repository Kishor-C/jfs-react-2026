package com.example.spring_boot_app;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
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

	
	@Autowired
	private ProfileServiceImpl profileService;
	@Autowired
	private ContactServiceImpl contactService;
	
	// add contact to the profile
	
	@PostMapping(path = "/profile/{profileId}/contact", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> storeContact(@RequestBody Contact contact, @PathVariable("profileId") int id) {
		// adding the foreign key to the contact entity
		contact.setUserIdRef(id);
		Contact saved = contactService.addContact(contact);
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("message", "Contact "+saved.getName()+" saved successfully");
		return ResponseEntity.status(201).body(map);
	}
	@GetMapping(path = "/profile/{profileId}/contact")
	public ResponseEntity<Object> fetchContacts(@PathVariable int  profileId) {
		List<Contact> contacts = contactService.getAllContacts(profileId);
		return ResponseEntity.status(200).body(contacts);
	}
	
	@PostMapping(path = "/profile", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> storeProfile(@RequestBody Profile profile) {
		Profile created = profileService.createProfile(profile);
		return ResponseEntity.status(HttpStatus.CREATED).body(created);
	}
	@GetMapping(path = "/profile")
	public ResponseEntity<Object> fetchProfiles() {
		List<Profile> list = profileService.findProfiles();
		return ResponseEntity.status(HttpStatus.OK).body(list);
	}
}
