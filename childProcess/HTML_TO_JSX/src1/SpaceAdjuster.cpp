/*
 * SpaceReduction.cpp
 *
 *  Created on: Sep 20, 2019
 *      Author: abhinav
 */

#include "../includes/SpaceAdjuster.hpp"
#include<iostream>
using namespace std;

int insideTagsSize=3;
string insideTags[3]={"class","id","style"};
//insideTags[0]="class";
//insideTags[1]="id";
//insideTags[2]="style";


void spaceAdjuster(std::string& tags){
	int commaStarted=0;
	int i=0;
	string mod="";
	while(tags[i]!='\0'){
		if(tags[i]=='"'){
			commaStarted=!commaStarted;
			mod.push_back(tags[i]);
			i++;
		}
		if(commaStarted){
			mod.push_back(tags[i]);
			i++;
		}
		else if(tags[i]==' '){
			mod.push_back(tags[i]);
			while(tags[i]==' '&&tags[i]!='\0')
				i++;
		}
		else{
			mod.push_back(tags[i]);
			i++;
		}
	}
	tags=mod;
	mod="";
	i=0;
	while(tags[i]!='\0'){
	if(tags[i]=='"'){
		commaStarted=!commaStarted;
		mod.push_back(tags[i]);
		i++;
	}
	else if(commaStarted){
		mod.push_back(tags[i]);
		i++;
	}
	else if(tags[i]==' '&&tags[i-1]=='<')
			i++;
	else if(tags[i]==' '&&tags[i+1]=='>')
			i++;
		mod.push_back(tags[i]);
		if(tags[i]=='>'&&tags[i+1]!=' '){
			mod.push_back(' ');
		}
		i++;
	}
	i=0;
	tags=mod;
	mod="";
	i=0;
}



