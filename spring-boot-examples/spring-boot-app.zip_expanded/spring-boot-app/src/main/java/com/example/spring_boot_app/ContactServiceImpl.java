package com.example.spring_boot_app;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactServiceImpl {

	// addContact(Contact), deleteContact(int contactId), getContactsList(int userid)

	@Autowired
	private ContactRepo contactRepo;
	
	// add contact will be called by passing contact & profile_id
	@Transactional
	public Contact addContact(Contact contact) {
		return contactRepo.save(contact);
	}
	
	@Transactional
	public boolean deleteContact(int contactId) {
		// orElse either returns contact or null
		Optional<Contact> option = contactRepo.findById(contactId);
		Contact contact = option.orElse(null);
		if(contact != null) {
			contactRepo.delete(contact);
			return true;
		} else {
			return false;
		}
	}
	public List<Contact> getAllContacts(int profileId) {
		// profileid is not a primary key - it is a foeign key
		return contactRepo.getContacts(profileId);
	}
}
