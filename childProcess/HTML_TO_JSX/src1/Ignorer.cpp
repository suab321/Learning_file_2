/*
 * Ignorer.cpp
 *
 *  Created on: Sep 22, 2019
 *      Author: abhinav
 */

#include "../includes/Ignorer.hpp"
#include<iterator>
#include<iostream>

using namespace std;

map<int,string>mod_jsx;
map<int,string>init;

map<int,string> ignoreTags(map<int,string>jsx){
	int counter=0;
	mod_jsx[++counter]="import React from 'react';";
	mod_jsx[++counter]="class YourComponent extends React.Component{";
	mod_jsx[++counter]="   constructor(props){";
	mod_jsx[++counter]="      super(props);";
	mod_jsx[++counter]="      this.state={};";
	mod_jsx[++counter]="   }";
	mod_jsx[++counter]="    // do http calls or <script> tag code here";
	mod_jsx[++counter]="   componentDiDMount(){";
	mod_jsx[++counter]="   }";
	mod_jsx[++counter]="render(){";
	mod_jsx[++counter]="return(";
	mod_jsx[++counter]="<div>";

	map<int,string>::iterator r;
	int tagStarted=0;
	for(r=jsx.begin();r!=jsx.end();r++){
		counter++;
		string collect="";
		collect=r->second;
		int i=0;
		while(collect[i]!='\0'){
			if(collect[i]=='<'){
				string word="";
				while(collect[i]!=' '){
					if(collect[i]=='>')
						break;
					word.push_back(collect[i]);
					i++;
				}
				if(word[0]=='<')
					word.erase(0,1);
				if(word[word.size()-1]=='>')
					word.erase(word.size()-1,1);
				// cout<<word<<endl;
				if(word=="link"||word=="meta"){
//					cout<<word<<endl;
					collect="";
					break;
				}
			}
			i++;
		}
		if(collect!="")
			mod_jsx[counter]=r->second;
	}
	mod_jsx[++counter]="</div>";
	mod_jsx[++counter]=");";
	mod_jsx[++counter]="}";
	mod_jsx[++counter]="}";
	mod_jsx[++counter]="export default YourComponent;";
	return mod_jsx;
}


