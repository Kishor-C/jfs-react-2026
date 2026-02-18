package com.example.spring_boot_app;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProfileServiceImpl {
	/*
	 * This class will have methods to 
	 * store profile, get profile by id, get all profiles, login
	 * addContact, viewContacts, deleteContact, searchContact
	 */
	
	@Autowired
	private ProfileRepo profileRepo;
	
	// takes profile object without id & passes to DAO
	// returns the profile object with an id
	@Transactional // required when you perform changes 
	public Profile createProfile(Profile profile) {
		Profile created = profileRepo.save(profile);
		return created;
	}
	// return all the profiles
	public List<Profile> findProfiles() {
		return profileRepo.findAll();
	}
	
	// login method - post {"id":12345, "password":"admin""}
	public Profile authenticate(Profile profile) {
		Optional<Profile> option = profileRepo.findByIdAndPassword(profile.getId(), profile.getPassword());
		return option.orElseThrow(() -> new ProfileNotFoundException("Id or Password is incorrect"));
	}
	
	// fetch the profile based on id
	public Profile findProfile(int profileId) {
		Optional<Profile> option = profileRepo.findById(profileId);
		return option.orElse(null);
	}
}
