package com.example.spring_boot_app;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ContactRepo extends JpaRepository<Contact, Integer>{

	// we don't have built-in method to find all the rows based on the foeign key
	@Query("select c from Contact c where c.userIdRef = ?1")
	public List<Contact> getContacts(int profileId);
}
