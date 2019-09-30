/*
 * main.cpp
 *
 *  Created on: Sep 20, 2019
 *      Author: abhinav
 */

#include<iostream>
#include<fstream>
#include<map>
#include<iterator>

#include "includes/Replacer.hpp"
#include "includes/SpaceAdjuster.hpp"
#include "includes/WordFinder.hpp"
#include "includes/TagsExtractor.hpp"
#include "includes/CommentConverter.hpp"
#include "includes/MergeToJSX.hpp"
#include "includes/Validator.hpp"
#include "includes/RenameTag.hpp"
#include "includes/Ignorer.hpp"

using namespace std;
int main(){
	map<int,string>tags;//storing tags
	map<int,string>html;//storing html
	map<int,string>contents;//storing contents
	map<int,string>jsx;//storing the converted html to jsx

	ifstream fileIn;//used for input html file
	ofstream fileOut;//used for output into jsx file

	string sin="/home/abhinav/Desktop/test.html";
	string sout="/home/abhinav/Desktop/result.jsx";
	int suba=1;
	fileIn.open(sin,ios::in);
	if(fileIn.is_open()){
		int i=0;
		string line="";
		while(getline(fileIn,line)){
			i++;
			html.insert(make_pair(i,line));
		}
	}
	else
		cout<<"unable to open";
	fileIn.close();
	convertComments(html);
	map<int,string>::iterator r;
	cout<<endl;
	extractor(html,tags,contents);
	for(r=tags.begin();r!=tags.end();r++){
		spaceAdjuster(r->second);
	}

	pair<int,string>p=validate(tags);
		if(p.first==-1)
			suba=1;
		else{
			cout<<1<<endl;
			cout<<"Error ate line "<<p.first<<" "<<"Error most probably in tag "<<p.second<<endl;
			exit(-2);
		}
	convertTags(tags);
//	for(r=tags.begin();r!=tags.end();r++){
//		cout<<r->second<<endl;
//	}

//	for(r=contents.begin();r!=contents.end();r++){
//		cout<<r->second<<endl;
//	}
	mergeToJSX(tags,contents,jsx);
//	for(r=jsx.begin();r!=jsx.end();r++){
//		cout<<r->second<<endl;
//	}
	jsx=ignoreTags(jsx);
	fileOut.open(sout,ios::out);
	if(fileOut.is_open()){
	for(r=jsx.begin();r!=jsx.end();r++){
			fileOut<<r->second+"\n";
		}
	}
	else
		exit(-3);
	fileOut.close();

	cout<<0<<endl;



//	spaceAdjuster(s);
//	string s="<html><p><!-- ehkbbfh --></p></html>";
//	pair<int,int>p=isWordFound(s,"<!--",' ');
//	cout<<p.first<<" "<<p.second;
//	if(p.first==-1&&p.second!=-1)
//		p.first=0;
//	replace(s,p.first,p.second,"{/*");
//	p=isWordFound(s,"-->",' ');
//		cout<<p.first<<" "<<p.second;
//		if(p.first==-1&&p.second!=-1)
//			p.first=0;
//		replace(s,p.first,p.second,"*/}");
//	cout<<s;
}
