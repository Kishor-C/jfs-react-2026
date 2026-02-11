package com.example.spring_boot_app;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepo extends JpaRepository<Profile, Integer>{
	
	public Optional<Profile> findByIdAndPassword(Integer id, String password);
}
