package models

type User struct {
	ID       int    `json:"id" db:"id"` // Primary Key
	Email    string `json:"email" db:"email"`
	UserId   string `json:"user_id" db:"user_id"`
	Password string `json:"password" db:"password"`
	PhoneNo  string `json:"phone_no" db:"phone_no"`
	Address  string `json:"address" db:"address"`
	UID      string `json:"uid" db:"uid"`
}
