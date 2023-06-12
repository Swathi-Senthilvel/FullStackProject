package com.ticketbooking.demo.model;



import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
//import jakarta.persistence.Table;

@Entity
//@Table(name="spectators")

public class Spectator 
{
	@Id
	@GeneratedValue
	private int ticketid;
	private String name;
    private String email;
    private String password;
  @OneToOne(cascade=CascadeType.ALL)
  @JoinColumn(name="ticket_id")
  private SpectatorAddress address;
	public SpectatorAddress getAddress() {
		return address;
	}
	public void setAddress(SpectatorAddress address) {
		this.address = address;
	} 	
     public int getTicketid() {
		return ticketid;
	}
	public void setTicketid(int ticketid) {
		this.ticketid = ticketid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Spectator [ticketid=" + ticketid + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", address=" + address + "]";
	}
}



