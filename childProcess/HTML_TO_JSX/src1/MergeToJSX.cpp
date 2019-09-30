/*
 * MergeToJSX.cpp
 *
 *  Created on: Sep 22, 2019
 *      Author: abhinav
 */
#include "../includes/MergeToJSX.hpp"
#include<queue>
#include<iterator>
#include<iostream>

using namespace std;

void getTags(queue<string>& qu,map<int,string>tags){
	int commaStarted=0;
	int tagStarted=0;
	string collect="";
	map<int,string>::iterator r;
	for(r=tags.begin();r!=tags.end();r++){
		string line=r->second;
		int i=0;
		while(line[i]!='\0'){
			if(line[i]=='<')
				tagStarted=1;
			if(!commaStarted&&line[i]=='>'){
				collect.push_back(line[i]);
				qu.push(collect);
				collect="";
				tagStarted=0;
			}
			if(tagStarted){
				collect.push_back(line[i]);
			}
			i++;
		}
	}
}

void display(queue<string>qu){
	while(!qu.empty()){
		// cout<<qu.front()<<endl;
		qu.pop();
	}
}

void mergeToJSX(map<int,string>tags,map<int,string>contents,map<int,string>& jsx){
	map<int,string>::iterator r;
	queue<string>qu;
	getTags(qu,tags);
//	display(qu);
	for(r=tags.begin();r!=tags.end();r++){

		string lineJSX="";//to store the temp modified merge line after moved to mod varibale
		string mod="";//to store the mod the version of content permanantly

		string tag=r->second;
		string content=contents[r->first];
		lineJSX=content;
		int iCon=0;
		while(content[iCon]!='\0'&&!qu.empty()){
			if(content[iCon]=='<'&&content[iCon+1]=='>'){
				replace(content,iCon,iCon+1,qu.front());
				qu.pop();
				iCon++;
			}
			iCon++;
//			cout<<content<<endl;
		}
		jsx[r->first]=content;
	}
}



