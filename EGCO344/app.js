//node.js file for API to show GPA

const express = require('express');

const app = express();

// Mock student data
const students = [
    {
        id: 'ENG001',
        name: 'John Smith',
        department: 'Civil Engineering',
        gpa: 3.85
    },
    {
        id: 'ENG002',
        name: 'Sarah Johnson',
        department: 'Mechanical Engineering',
        gpa: 3.92
    },
    {
        id: 'ENG003',
        name: 'Michael Chen',
        department: 'Electrical Engineering',
        gpa: 3.78
    },
    {
        id: 'ENG004',
        name: 'Emma Davis',
        department: 'Civil Engineering',
        gpa: 3.88
    },
    {
        id: 'ENG005',
        name: 'David Wilson',
        department: 'Computer Engineering',
        gpa: 3.95
    },
    {
        id: 'ENG006',
        name: 'Lisa Anderson',
        department: 'Mechanical Engineering',
        gpa: 3.71
    }
];

app.get('/', (req, res) => {
    res.redirect('/api/students');
});

// API 1: Get all students with GPA
app.get('/api/students', (req, res) => {
    res.json({
        success: true,
        count: students.length,
        data: students
    });
});

// API 2: Get student GPA by student ID
app.get('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === req.params.id);
    
    if (!student) {
        return res.status(404).json({
            success: false,
            message: 'Student not found'
        });
    }
    
    res.json({
        success: true,
        data: student
    });
});

// API 3: Get all students by department
app.get('/api/departments/:department', (req, res) => {
    const filtered = students.filter(
        s => s.department.toLowerCase() === req.params.department.toLowerCase()
    );
    
    if (filtered.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No students found for this department'
        });
    }
    
    res.json({
        success: true,
        count: filtered.length,
        data: filtered
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});