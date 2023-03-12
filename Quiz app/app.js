var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is HTML?",
    "options": [
    {
    "a": "HTML describes the structure of a webpage",
    "b": "HTML is the standard markup language mainly used to create web pages",
    "c": "HTML consists of a set of elements that helps the browser how to view the content",
    "d": "All of the mentioned"
    }
    ],
    "answer": "All of the mentioned",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Who is the father of HTML?",
    "options": [
    {
    "a": "Rasmus Lerdorf",
    "b": "Tim Berners-Lee",
    "c": "Brendan Eich",
    "d": "Sergey Brin"
    }
    ],
    "answer": "Tim Berners-Lee",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "HTML stands for __________",
    "options": [
    {
    "a": "HyperText Markup Language",
    "b": "HyperText Machine Language",
    "c": "HyperText Marking Language"
    }
    ],
    "answer": "HyperText Markup Language",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "The external JavaScript file must contain the &lt;script&gt; tag.",
    "options": [
    {
    "a": "True",
    "b": "False"
    }
    ],
    "answer": "False",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "In which part of the HTML metadata is contained?",
    "options": [
    {
    "a": "head tag",
    "b": "title tag",
    "c": "html tag",
    "d": "body tag",
    }
    ],
    "answer": "head tag",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "How do you create a function in JavaScript?",
    "options": [
    {
    "a": "function myFunction()",
    "b": "function:myFunction()",
    "c": "function = myFunction()",
    }
    ],
    "answer": "function myFunction()",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which of the following is used to read an HTML page and render it?",
    "options": [
    {
    "a": "Web server",
    "b": "Web browser",
    "c": "Web matrix",
    }
    ],
    "answer": "Web browser",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "How to write an IF statement in JavaScript?",
    "options": [
    {
    "a": "if i = 5 then",
    "b": "if i == 5 then",
    "c": "if (i == 5)",
    "d": " if i = 5",
    }
    ],
    "answer": "if (i == 5)",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What is DOM in HTML?",
    "options": [
    {
    "a": "Language dependent application programming",
    "b": "Hierarchy of objects in ASP.NET",
    "c": "Application programming interface",
    "d": "Convention for representing and interacting with objects in html documents"
    }
    ],
    "answer": "Convention for representing and interacting with objects in html documents",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",
    "options": [
    {
    "a": "if (i <> 5)",
    "b": "if i <> 5",
    "c": "if (i != 5)",
    "d": "if i =! 5 then",
    }
    ],
    "answer": "if (i != 5)",
    "score": 0,
    "status": ""
    },
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });
   