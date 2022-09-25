package com.example.swe642hw3.repository;

import com.example.swe642hw3.model.Survey;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin
public interface SurveyRepository extends CrudRepository<Survey, Long> {

}
