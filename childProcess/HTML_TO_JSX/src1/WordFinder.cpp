/*
 * WordFinder.cpp
 *
 *  Created on: Sep 20, 2019
 *      Author: abhinav
 */


#include "../includes/WordFinder.hpp"
#include<iostream>
//#include<string>
using namespace std;

pair<int,int> isWordFound(string line,string word,char seperator){
	string collect;
	pair<int,int>result;
	result.second=result.first=-1;
	int start=0,end=-1;
	for(auto i:line){
		end++;
		if(i==seperator||i==' '||i=='<'){
			if(collect==word){
				if(start==-1)
					start=0;
				result.first=start;
				result.second=end-1;
				if(result.first==-1)
				return result;
			}
			collect="";
			start=end+1;
			if(i=='<'){
				start=end-1;
				collect.push_back(i);
			}
		}
		else
			collect.push_back(i);
	}
	if(collect==word){
		if(start==-1)
			start=0;
		result.first=start;
		result.second=end;
		if(result.first==-1)
		return result;
	}
	return result;
}

