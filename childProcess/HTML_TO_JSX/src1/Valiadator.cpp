/*
 * Valiadator.cpp
 *
 *  Created on: Sep 22, 2019
 *      Author: abhinav
 */

#include "../includes/Validator.hpp"
#include<iterator>
#include<stack>
#include<iostream>
using namespace std;
stack<string>st;

map<string,int>singleTags;

//function used for pushing html tags into the stack and the tag without classes or any other attributes inside tag
string  getFiltered(string tag){
	int i=0;
	while(tag[i]==' '){
		tag.erase(i,1);
	}
//	cout<<tag<<endl;
	string s;
	for(auto i:tag){
		if(i==' ')
			break;
		else if(i=='>'){
			s.push_back(i);
			break;
		}
		else
			s.push_back(i);
	}
	if(s[s.size()-1]!='>')
		s.push_back('>');
//	st.push(s);
//	cout<<s<<" ";
	return s;
}

//function for checking in tag if the tag is closing tag then checking if its opening tag is there in stack and if not closing tag then pushing
//into the stack,also there are some special tags which does not require closing tag contained in data structure singleTags
bool check(string tag){
	if(singleTags[tag])
		return true;

	if(tag[1]!='/'){
//		cout<<" "<<true<<endl;
		st.push(tag);
		return true;
	}
//	cout<<tag<<" "<<st.top()<<endl;
	tag.erase(1,1);
	if(tag==st.top()){
		st.pop();
		return true;
	}
	else
		return false;
}

pair<int,string> validate(map<int,string>tags){
	singleTags["<input>"]=1;
	singleTags["<meta>"]=1;
	singleTags["<br>"]=1;
	singleTags["<link>"]=1;
	singleTags["<img>"]=1;
	singleTags["<source>"]=1;
	singleTags["</input>"]=1;
	singleTags["</meta>"]=1;
	singleTags["</br>"]=1;
	singleTags["</link>"]=1;
	singleTags["</img>"]=1;
	singleTags["</source>"]=1;
	singleTags["<hr>"]=1;
	singleTags["</hr>"]=1;
	singleTags["<col>"]=1;
	singleTags["</col>"]=1;
	singleTags["<param>"]=1;
	singleTags["</param>"]=1;
	singleTags["<keygen>"]=1;
	singleTags["</keygen>"]=1;

	int tagStarted=0;
	map<int,string>::iterator r;
	int commaStarted=0;
	for(r=tags.begin();r!=tags.end();r++){
		string line=r->second;
//		cout<<line<<endl;
		string collect="";
		int i=0;
		while(line[i]!='\0'){
			if(line[i]=='"')
				commaStarted=!commaStarted;

			if(!commaStarted){
				if(line[i]=='>'){
					collect.push_back(line[i]);
					collect=getFiltered(collect);
//					cout<<collect<<endl;
					if(!check(collect)){
						pair<int,string>p;
						p.first=r->first;
						p.second=collect;
						return p;
					}
//					cout<<collect<<endl;
					collect="";
				}
				else
					collect.push_back(line[i]);
			}
			i++;
		}
	}
	pair<int,string>p;
	if(st.size()==0){
		p.first=-1;
		p.second="";
	}
	else{
		// cout<<"Error after whole passed"<<endl;

		p.first=r->first;
		p.second=st.top();
	}
	return p;
}

