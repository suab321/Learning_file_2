/*
 * AnyTag.cpp
 *
 *  Created on: Sep 20, 2019
 *      Author: abhinav
 */
#include "../includes/RenameTag.hpp"
using namespace std;
#include<iterator>
#include<iostream>

map<string,int>singleTag;

pair<int,int> find(string line,string word){
	string collect="";
	int i=0;
	int start=0;
	string sub="";
	while(line[i]!='\0'){
		if(line[i]=='<'){
			start=i;
			int j=i;
			while(line[j]!='>'&&line[j]!='0')
				j++;
			if(line[j-1]=='/'){
				// cout<<"yes";
				collect="";
			}
			else{
			while(line[i]!=' '&&line[i]!='\0'){
				if(line[i]=='>')
					break;
				collect.push_back(line[i]);
				i++;
			}
			if(collect[collect.size()-1]!='>')
				collect.push_back('>');
			if(collect[1]=='/'){
				if(word==collect)
					return make_pair(start,i);
			}
			if(word==collect){
//				cout<<collect<<" "<<word<<endl;
				while(line[i]!='>'&&line[i]!='\0')
					i++;
				return make_pair(i,i);
			}
			else
				collect="";
			}
		}
		i++;
	}
	return make_pair(-1,-1);
}

void convertTags(map<int,string>& tags){
	singleTag["<input>"]=1;
	singleTag["</input>"]=1;
	singleTag["<br>"]=1;
	singleTag["</br>"]=1;
	singleTag["<img>"]=1;
	singleTag["</img>"]=1;
	singleTag["<source>"]=1;
	singleTag["<hr>"]=1;
	singleTag["<hr/>"]=1;
	singleTag["<col>"]=1;
	singleTag["</col>"]=1;
	singleTag["<param>"]=1;
	singleTag["</param>"]=1;
	singleTag["<keygen>"]=1;
	singleTag["</keygen>"]=1;

	map<int,string>::iterator r;
	for(r=tags.begin();r!=tags.end();r++){
		string line=r->second;
		int start=1;
		bool isSatisfied=true;
		while(isSatisfied){
			for(auto i:singleTag){
				isSatisfied=false;
				pair<int,int>p=find(line,i.first);
				if(p.first==-1&&p.second==-1)
					start=1;
				else{
					isSatisfied=true;
					string replacer=i.first;
					if(replacer[1]=='/'){
						replacer.erase(1,1);
						replacer.pop_back();
						replacer.push_back('/');
						replacer.push_back('>');
						replace(line,p.first,p.second,replacer);
					}
					else
						replace(line,p.first,p.second,"/>");
				}
			}
		}
		isSatisfied=true;
		while(isSatisfied){
			pair<int,int>p=isWordFound(line,"class",'=');
			if(p.first==-1&&p.second==-1)
				isSatisfied=false;
			else{
//				cout<<"found"<<endl;
				replace(line,p.first,p.second,"className");
			}
		}

		isSatisfied=true;
		while(isSatisfied){
			isSatisfied=false;
			pair<int,int>p=isWordFound(line,"style",'=');
			if(p.first==-1&&p.second==-1)
				isSatisfied=false;
			else{
				isSatisfied=true;
				int i=p.second;
				line.insert(i+1,1,'s');
//				cout<<i<<endl;
				while(line[i]!='"'&&line[i]!='\0')
					i++;
//				cout<<i<<endl;
				replace(line,i,i,"{{");
				// cout<<line;
				while(line[i]!='-'){
					if(line[i]==':')
						break;
					i++;
				}
				if(line[i]=='-')
					line.erase(i,1);
				while(line[i]!=':')
					i++;
				i++;
				line.insert(i,1,'"');

				i++;
				while(line[i]!='"'&&line[i]!='\0')
					i++;
				line.insert(i+1,2,'}');
		}
		}
		isSatisfied=true;
		while(isSatisfied){
			isSatisfied=false;
			pair<int,int>p=isWordFound(line,"styles",'=');
			if(p.first==-1&&p.second==-1)
				isSatisfied=false;
			else{
				int i=p.second;
				isSatisfied=true;
				if(line[i]=='s')
					line.erase(i,1);
			}
		}
		r->second=line;
	}
}
