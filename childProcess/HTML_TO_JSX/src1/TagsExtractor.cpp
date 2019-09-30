
/*
 * TagsExtractor.cpp
 *
 *  Created on: Sep 20, 2019
 *      Author: abhinav
 */
#include<iostream>
#include "../includes/TagsExtractor.hpp"
using namespace std;

#include<iterator>

void extractor(map<int,string>lines,map<int,string>& tags,map<int,string>& contents){
	int commentStarted=0;//when a comment starts
	int commaStarted=0;//when a " starts
	int tagStarted=0;//used for marking when a tag gets opened and closed

	string tag="";//used for storing tags of a line//
	string content="";//used for storing the contents for a particular line

	map<int,string>::iterator r;
	for(r=lines.begin();r!=lines.end();r++){
		int index=0;
		string line=r->second;
		while(line[index]!='\0'){
		if(!tagStarted)
			content.push_back(line[index]);
		if(line[index]=='{'&&line[index+1]=='/'&&line[index+2]=='*'){
			commentStarted=1;
		}
		if(line[index]=='*'&&line[index+1]=='/'&&line[index+2]=='}')
			commentStarted=0;
		if(commentStarted)
			index++;
		else{
			if(line[index]=='<'){
				tagStarted=1;
				while(line[index]!='\0'){
					if(line[index]=='"'){
						tag.push_back(line[index]);
						commaStarted=!commaStarted;
					}
					else if(line[index]=='>'&&!commaStarted){
						tag.push_back(line[index]);
						tagStarted=0;
						break;
					}
					else
						tag.push_back(line[index]);
					index++;
				}
			}
			else
				index++;
		}
	}
	tags[r->first]=tag;
	tag="";
	contents[r->first]=content;
	content="";
}
}
