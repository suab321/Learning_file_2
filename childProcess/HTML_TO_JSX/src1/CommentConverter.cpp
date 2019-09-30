/*
 * CommentConverter.cpp
 *
 *  Created on: Sep 21, 2019
 *      Author: abhinav
 */

#include<iterator>
#include<iostream>

#include "../includes/CommentConverter.hpp"


using namespace std;

void convertComments(map<int,string>& html){
	map<int,string>::iterator r;
	int t=0;
	for(r=html.begin();r!=html.end();r++){
		int i=0;
		string mod=r->second;
		while(mod[i]!='\0'){
			if(mod[i]=='<'&&mod[i+1]=='!'&&mod[i+2]=='-'&&mod[i+3]=='-')
				replace(mod,i,i+3,"{/*");
			else if(mod[i]=='-'&&mod[i+1]=='-'&&mod[i+2]=='>')
				replace(mod,i,i+2,"*/}");
			i++;
		}
		r->second=mod;
	}
}



