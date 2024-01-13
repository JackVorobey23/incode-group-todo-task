import Board from "@models/board";
import { TodoType } from "@models/todo";

const allBoards: Board[] = [
    {
        "id": "1",
        "name": "Development",
        "todos": [
            { "id": "1", "title": "Implement Feature X", "description": "Work on implementing Feature X", "type": TodoType.Done },
            { "id": "2", "title": "Fix Bug Y", "description": "Investigate and fix Bug Y", "type": TodoType.InProgress }
        ]
    },
    {
        "id": "2",
        "name": "Design",
        "todos": [
            { "id": "3", "title": "Create UI Mockups", "description": "Design user interface mockups", "type": TodoType.ToDo },
            { "id": "4", "title": "Refine Color Palette", "description": "Refine the color palette for the project", "type": TodoType.Done }
        ]
    },
    {
        "id": "3",
        "name": "Marketing",
        "todos": [
            { "id": "5", "title": "Launch Campaign A", "description": "Plan and execute marketing campaign A", "type": TodoType.InProgress },
            { "id": "6", "title": "Social Media Updates", "description": "Post updates on social media platforms", "type": TodoType.Done }
        ]
    },
    {
        "id": "4",
        "name": "Testing",
        "todos": [
            { "id": "7", "title": "Run Test Suite", "description": "Execute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suiteExecute comprehensive test suite", "type": TodoType.ToDo },
            { "id": "8", "title": "Performance Testing", "description": "Conduct performance testing", "type": TodoType.InProgress },
            { "id": "99", "title": "Performance Testing", "description": "Conduct performance testing", "type": TodoType.Done },
            { "id": "100", "title": "Performance Testing", "description": "Conduct performance testing", "type": TodoType.InProgress },
        ]
    },
    {
        "id": "5",
        "name": "Support",
        "todos": [
            { "id": "9", "title": "Customer Inquiries", "description": "Respond to customer inquiries", "type": TodoType.Done },
            { "id": "10", "title": "Bug Reports", "description": "Handle incoming bug reports", "type": TodoType.ToDo }
        ]
    },
    {
        "id": "6",
        "name": "Documentation",
        "todos": [
            { "id": "11", "title": "Update User Manuals", "description": "Update documentation and user manuals", "type": TodoType.InProgress },
            { "id": "12", "title": "Write Release Notes", "description": "Prepare release notes for the upcoming version", "type": TodoType.Done }
        ]
    },
    {
        "id": "7",
        "name": "Finance",
        "todos": [
            { "id": "13", "title": "Budget Planning", "description": "Plan the budget for the next quarter", "type": TodoType.Done },
            { "id": "14", "title": "Expense Reports", "description": "Review and process employee expense reports", "type": TodoType.InProgress }
        ]
    },
    {
        "id": "8",
        "name": "HR",
        "todos": [
            { "id": "15", "title": "Recruitment", "description": "Recruit new team members", "type": TodoType.ToDo },
            { "id": "16", "title": "Employee Training", "description": "Organize training sessions for employees", "type": TodoType.InProgress }
        ]
    },
    {
        "id": "9",
        "name": "Meetings",
        "todos": [
            { "id": "17", "title": "Weekly Team Meeting", "description": "Hold the weekly team meeting", "type": TodoType.ToDo },
            { "id": "18", "title": "Client Meeting", "description": "Prepare for the upcoming client meeting", "type": TodoType.Done }
        ]
    },
    {
        "id": "10",
        "name": "Security",
        "todos": [
            { "id": "19", "title": "Vulnerability Assessment", "description": "Conduct a vulnerability assessment", "type": TodoType.InProgress },
            { "id": "20", "title": "Security Training", "description": "Provide security training for the team", "type": TodoType.Done }
        ]
    }
]

export async function getSearchResults(query: string) {

    await new Promise(resolve => {
        setTimeout(resolve, 500);
    });

    const lowerQuery = query.trim().toLowerCase();

    return allBoards.filter((board: Board) => {
        const lowerTitle = board.name.toLowerCase();
        const lowerId = board.id.toLowerCase();

        return (
            lowerTitle.includes(lowerQuery) ||
            lowerId.includes(lowerQuery)
        )
    });
}

export async function getBoardById(boardId: string) {

    await new Promise(resolve => {
        setTimeout(resolve, 500);
    });


    return allBoards.find((board: Board) => board.id === boardId);
}