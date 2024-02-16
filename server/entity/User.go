package entity

// User represents a user entity
type User struct {
	ID       string `json:"id,omitempty"`
	Name     string `json:"name,omitempty"`
	Age      int    `json:"age,omitempty"`
	Location string `json:"location,omitempty"`
}
