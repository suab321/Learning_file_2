//============================================================================
// Name        : sd.cpp
// Author      : 
// Version     :
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <iostream>
#include <vector>
#include<set>
#include<iterator>
using namespace std;

set<vector<int> >result;

int recur(int *arr,int index,int size,int value,int count){
	if(count==size)
		return 0;
	if(value==0&&count==3)
		return 1;
	else if(count==3)
		return 0;
	else{
		return recur(arr,index+1,size,value+arr[index],++count)+recur(arr,index+1,size,value,count);
	}
}

int main() {
int arr[6]={-1, 0, 1, 2, -1, -4};
vector<int>holder;
cout<<recur(arr,-1,6,0,0)<<endl;
cout<<result.size();
set<vector<int> >::iterator r;
for(r=result.begin();r!=result.end();r++){
	vector<int>x=*r;
	vector<int>::iterator q;
	for(q=x.begin();q!=x.end();q++)
		cout<<*q<<" ";
	cout<<endl;
}
}
