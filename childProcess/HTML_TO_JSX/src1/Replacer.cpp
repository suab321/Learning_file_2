/*
 * Replacer.cpp
 *
 *  Created on: Sep 20, 2019
 *      Author: abhinav
 */

#include "../includes/Replacer.hpp"
#include<iostream>

using namespace std;

//function replaces a the portion of word indicated by start and end position and fits the replacer into it.
//if end==-1 then the insertion is performed at till last

void replace(string &line,int start,int end,string replacer){
//	cout<<start<<" "<<end<<endl;
	//this means that the word needs to be appended at last
	if(end==-1){
		line.push_back(' ');
		line=line+replacer;
		return;
	}
	string s="";
	int i=0;
	while(i!=start && line[i]!='\0'){
		s.push_back(line[i]);
		i++;
	}
	int j=0;
	while(i<=end && replacer[j]!='\0'){
		s.push_back(replacer[j]);
		j++;
		i++;
	}
	while(replacer[j]!='\0'){
		s.push_back(replacer[j]);
		j++;
	}
	while(i<=end)
		i++;
	while(line[i]!='\0'){
		s.push_back(line[i]);
		i++;
	}
//	cout<<"converted line "<<s<<endl;
	line=s;
}


