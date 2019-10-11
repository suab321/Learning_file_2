#include<iostream>
#include<curses.h>
#include<cstdio>
#include<thread>
#include<queue>
#include<set>

using namespace std;
using namespace literals::chrono_literals;

struct SnakeBody{
	int x;
	int y;
	char val;
	SnakeBody* next;
	SnakeBody(char val,int x,int y):val(val),x(x),y(y),next(NULL){};
};
SnakeBody* start=NULL;
SnakeBody* tail=NULL;




int direction=261;//right initial
bool Game=true;
int eaten=0;
int wallWidth=20;
int wallHeight=50;

int food_x=0;
int food_y=0;
int points=-1;

int snakeHead_x=0;
int snakeHead_y=0;
int snakeLength=0;
set<pair<int,int> >s;

void printWall();//making the boundary
void work();//thread function
void putFood();
void makeSnake();
void steering();//changing of snakes direction

void putFood(){
	++points;
	if(points%2==0){
		SnakeBody* n=new SnakeBody('*',1,1);
		tail->next=n;
		tail=n;
	}
	food_x=rand()%wallWidth+1;
	food_y=rand()%wallHeight+1;
}

void steering(){
	if(start->x==food_x&&start->y==food_y)
		putFood();
	if(direction==261){//right
		SnakeBody* temp=start;
		int prevX,prevY;
		while(temp!=NULL){
			if(temp==start){
				prevX=temp->x;
				prevY=temp->y;
				if(temp->y==wallHeight-1)
					temp->y=2;
				else
					temp->y++;
			}
			else{
				int x=temp->x,y=temp->y;
				temp->y=prevY;
				temp->x=prevX;
				prevX=x;
				prevY=y;
			}
			temp=temp->next;
		}
	}
	else if(direction==259){//up
		SnakeBody* temp=start;
		int prevX,prevY;
		while(temp!=NULL){
			if(temp==start){
				prevX=temp->x;
				prevY=temp->y;
				if(temp->x==2){
					temp->x=wallWidth-1;
					}
				else
					temp->x--;
			}
			else{
				int x=temp->x;
				int y=temp->y;
				temp->x=prevX;
				temp->y=prevY;
				prevX=x;
				prevY=y;
			}
			temp=temp->next;
		}
	}
	else if(direction==258){//down
		SnakeBody* temp=start;
		int prevX,prevY;
		while(temp!=NULL){
			if(temp==start){
				prevX=temp->x;
				prevY=temp->y;
				if(temp->x==wallWidth-1)
					temp->x=2;
				else
					temp->x++;
			}
			else{
				int x=temp->x,y=temp->y;
				temp->x=prevX;
				temp->y=prevY;
				prevX=x;
				prevY=y;
			}
			temp=temp->next;
		}
	}
	else if(direction==260){//left
		SnakeBody* temp=start;
		int prevX,prevY;
		while(temp!=NULL){
			if(temp==start){
				prevX=temp->x;
				prevY=temp->y;
				if(temp->y==2)
					temp->y=wallHeight-1;
				else
					temp->y--;
			}
			else{
				int x=temp->x,y=temp->y;
				temp->x=prevX;
				temp->y=prevY;
				prevX=x;
				prevY=y;
			}
			temp=temp->next;
		}
	}
}


void printWall(){
	s.clear();
	SnakeBody* temp=start;
	while(temp!=NULL){
		s.insert(make_pair(temp->x,temp->y));
		temp=temp->next;
	}
	system("clear");
	for(int i=1;i<=wallWidth;i++){
		printf("#");
		for(int j=1;j<=wallHeight-1;j++){
			pair<int,int>p=make_pair(i,j);
			if(s.find(p)!=s.end())
				printf("*");
			else if(i==food_x&&j==food_y)
				printf("0");
			else{
				if(i==1||i==wallWidth)
					printf("#");
				else
					printf(" ");
			}
		}
		printf("#\n");
	}
}


void work(){
	while(Game){
		initscr();
		steering();
		printWall();
		refresh();
		endwin();
		this_thread::sleep_for(1ms);
	}
	return;
}

int main(){
	SnakeBody* s1=new SnakeBody('*',4,4);
	start=s1;
	SnakeBody* s2=new SnakeBody('*',4,3);
	s1->next=s2;
	SnakeBody* s3=new SnakeBody('*',4,2);
	s2->next=s3;
	tail=s3;
	putFood();
	thread worker(work);
	initscr();
	raw();
	noecho();
	cbreak();
	keypad(stdscr,TRUE);
	while(Game){
		direction=getch();
	}
	worker.detach();
}