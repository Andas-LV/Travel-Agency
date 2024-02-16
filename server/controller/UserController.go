package controller

import (
	"encoding/json"
	"my-gin-project/entity"
	"net/http"
)

type UserController struct {
	users []entity.User
}

func NewUserController() *UserController {
	return &UserController{
		users: make([]entity.User, 0),
	}
}

func GetHello(w http.ResponseWriter, r *http.Request) {
	response := map[string]string{"message": "Hello, API"}
	w.Header().Set("Content-Type", "application/json")
	err := json.NewEncoder(w).Encode(response)
	if err != nil {
		return
	}
}

func (uc *UserController) GetUsers(w http.ResponseWriter, r *http.Request) {
	err := json.NewEncoder(w).Encode(uc.users)
	if err != nil {
		return
	}
}
