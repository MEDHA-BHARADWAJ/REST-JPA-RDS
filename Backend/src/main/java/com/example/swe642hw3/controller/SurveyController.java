package com.example.swe642hw3.controller;

import com.example.swe642hw3.model.Survey;
import com.example.swe642hw3.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class SurveyController {

    @Autowired
    private SurveyRepository surveyRepository;

    //get all survey
    @GetMapping("/getSurveys")
    @CrossOrigin
    public List<Survey> getAllSurveys() {
        System.out.print("I am here");
        List<Survey> s = (List<Survey>) surveyRepository.findAll();
        return s;
    }

    //save a survey
    @PostMapping(value = "/saveSurvey")
    @CrossOrigin
    public String createSurvey(@RequestBody Survey survey) {
        System.out.print("I am here");
        surveyRepository.save(survey);
        return "success";
    }
}
