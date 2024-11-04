 config/db.js: Kết nối đến MongoDB.
controllers/: Chứa các file xử lý logic cho từng loại dữ liệu. Ví dụ: authController.js xử lý đăng nhập, đăng ký; projectController.js xử lý CRUD cho project; taskController.js xử lý CRUD cho task.
middleware/: Chứa các middleware dùng để xác thực và kiểm tra quyền truy cập. Ví dụ: authMiddleware.js kiểm tra JWT token, roleMiddleware.js kiểm tra quyền admin.
models/: Các file định nghĩa cấu trúc dữ liệu cho MongoDB (Mongoose).
routes/: Chứa các file định nghĩa các route API, như /api/projects, /api/tasks.
utils/generateToken.js: Tạo JWT token để sử dụng cho authentication.

backend/             # Thư mục gốc của backend (Node.js + Express)
│
├── config/          # Thư mục chứa các cấu hình kết nối
│   └── db.js        # Cấu hình kết nối MongoDB
│
├── controllers/     # Chứa các logic điều khiển cho API
│   ├── authController.js     # Xử lý authentication (login, register)
│   ├── projectController.js  # Xử lý dự án (CRUD cho project)
│   └── taskController.js     # Xử lý task (CRUD cho task)
│
├── middleware/      # Chứa các middleware để bảo vệ route
│   ├── authMiddleware.js     # Middleware xác thực JWT
│   └── roleMiddleware.js     # Middleware kiểm tra vai trò người dùng
│
├── models/          # Chứa các model dùng với Mongoose
│   ├── User.js      # Mô hình người dùng (User)
│   ├── Project.js   # Mô hình dự án (Project)
│   └── Task.js      # Mô hình task (Task)
│
├── routes/          # Định nghĩa các route API
│   ├── authRoutes.js       # Route liên quan đến đăng nhập/đăng ký
│   ├── projectRoutes.js    # Route liên quan đến project
│   └── taskRoutes.js       # Route liên quan đến task
│
├── utils/           # Chứa các tiện ích hỗ trợ như tạo JWT
│   └── generateToken.js    # Hàm tạo JWT
│
├── .env             # File chứa các biến môi trường (SECRET_KEY, DATABASE_URL)
├── app.js           # Điểm vào chính của ứng dụng Node.js (Express server)
├── server.js        # Khởi tạo server và kết nối database
├── package.json     # File cấu hình npm
└── README.md        # Tài liệu hướng dẫn sử dụng ứng dụng backend
