package com.ticketbooking.demo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "booking")
public class Booking {
    @Id
    private int sno;
    private String ticket_id;
    private String name;
    private String mobile_no;
    private String stadium;
    private String team;
    private String match_no;
    private String opponentteam;
    private String date;
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	public String getTicket_id() {
		return ticket_id;
	}
	public void setTicket_id(String ticket_id) {
		this.ticket_id = ticket_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobile_no() {
		return mobile_no;
	}
	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}
	public String getStadium() {
		return stadium;
	}
	public void setStadium(String stadium) {
		this.stadium = stadium;
	}
	public String getTeam() {
		return team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
	public String getMatch_no() {
		return match_no;
	}
	public void setMatch_no(String match_no) {
		this.match_no = match_no;
	}
	public String getOpponentteam() {
		return opponentteam;
	}
	public void setOpponentteam(String opponentteam) {
		this.opponentteam = opponentteam;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	

public Booking(){
}
}