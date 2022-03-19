//store information for each class in a dictionary
var classes = {
    'Programming Usable Interfaces': {
        course_name: 'Programming Usable Interfaces',
        instructor: 'Professor Scott Hudson',
        units: '12 units',
        location: 'Newell Simon Hall',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        requirement_1: 'Art',
        requirement_2: 'HCI Core Course',
        semesters: 'Semesters Available: Spring 2022, Fall 2023',
        0: 'A (8:35am - 9:55am) ',
        1: 'B (10:40am - 12:10pm)',
        2: 'C (3:00pm - 4:25pm)',
        waitlist: 'Typical Waitlist: 35'
    },
    'IS Consulting Project': {
        course_name: 'IS Consulting Project',
        instructor: 'Professor Joe Mertz',
        units: '12 units',
        location: 'Hamburg Hall A301',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        requirement_1: 'IS Core',
        requirement_2: 'Consulting',
        semesters: 'Semesters Available: Spring 2022',
        0: 'A (10:40am - 12:10pm) ',
        1: 'B (3:00pm - 4:25pm)',
        2: 'C (5:00pm - 6:25pm)',
        waitlist: 'Typical Waitlist: 15'
    },
    'Principles of Computing': {
        course_name: 'Principles of Computing',
        instructor: 'Professor David Kosbie',
        units: '12 units',
        location: 'Gates',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        requirement_1: 'Computing',
        requirement_2: 'Basics of Python',
        semesters: 'Semesters Available: Fall 2021, Spring 2021, Fall 2022',
        0: 'A (8:35am - 9:55am) ',
        1: 'B (3:00pm - 4:25pm)',
        2: 'C (5:00pm - 6:25pm)',
        waitlist: 'Typical Waitlist: 50'
    },
    'Python Basics Lab': {
        course_name: 'Principles of Computing',
        instructor: 'Professor David Kosbie',
        units: '12 units',
        location: 'Gates',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        requirement_1: 'Computing',
        requirement_2: 'Basics of Python',
        semesters: 'Semesters Available: Fall 2021, Spring 2021, Fall 2022',
        0: 'A (8:35am - 9:55am) ',
        1: 'B (3:00pm - 4:25pm)',
        2: 'C (5:00pm - 6:25pm)',
        waitlist: 'Typical Waitlist: 50'
    }
}

// finds the correct class from the course schedule
function findClass() {
    let class_name = localStorage.getItem('class_name')
    let class_dict = classes[class_name]
    return class_dict
}

// load all of the class data into the course details HTML file
function onLoad() {
    let class_dict = findClass()
    //course name
    let name = document.getElementById('course_name')
    name.textContent = class_dict['course_name']
    //instructor
    let instructor = document.getElementById('instructor')
    instructor.textContent = class_dict['instructor']
    //units
    let units = document.getElementById('units')
    units.textContent = class_dict['units']
    let location = document.getElementById('location')
    location.textContent = class_dict['location']
    let description = document.getElementById('description')
    description.textContent = class_dict['description']
    let requirement_1 = document.getElementById('requirement_1')
    requirement_1.textContent = class_dict['requirement_1']
    let requirement_2 = document.getElementById('requirement_2')
    requirement_2.textContent = class_dict['requirement_2']
    let semesters = document.getElementById('semesters')
    semesters.textContent = class_dict['semesters']
    // adds in sections for different classes
    let sections = document.querySelector('select')
    for (var i = 0; i < sections.length; i++) {
        var option = sections.options[i];
        option.innerHTML = class_dict[i];
    }
    let waitlist = document.getElementById('waitlist')
    waitlist.textContent = class_dict['waitlist']

}
