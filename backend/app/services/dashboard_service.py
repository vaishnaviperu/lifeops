def get_mock_dashboard_data():
    return {
        "stats": {
            "priorities": { "value": '6 Tasks', "label": 'Today\'s Priorities', "footer": '2 High, 3 Medium, 1 Low' },
            "payments": { "value": '₹5,850', "label": 'Upcoming Payments', "footer": '2 payments due', "alert": 'Due within 7 days' },
            "schedule": { "value": '3 Events', "label": 'Schedule Today', "footer": 'Next: Team Standup at 10:00 AM' },
            "budget": { "value": '82%', "label": 'Monthly Budget', "footer": '₹41,000 / ₹50,000', "progress": 82 },
            "subscriptions": { "value": '12', "label": 'Active Subscriptions', "footer": '₹2,100 / month', "alert": '3 renewals soon' },
        },
        "insights": {
            "main": {
                "title": "You have 2 overlapping payments",
                "description": "Rent and Electricity bill are due within 3 days. Consider paying Electricity bill today to avoid cash flow pressure.",
                "button": "Review Payments"
            },
            "others": [
                "You haven't used Canva in the last 45 days. It renews in 3 days for ₹499.",
                "Your monthly subscription spend is 18% of your budget.",
                "You usually pay bills late. Enable smart autopay?"
            ]
        },
        "schedule": [
            { "time": '10:00 AM', "title": 'Team Standup', "duration": '30 min', "color": 'bg-blue-500' },
            { "time": '11:00 AM', "title": 'Project Review', "duration": '1 hr', "color": 'bg-blue-500' },
            { "time": '01:00 PM', "title": 'Lunch Break', "duration": '1 hr', "color": 'bg-orange-400' },
            { "time": '03:00 PM', "title": 'Client Call', "duration": '1 hr', "color": 'bg-purple-500' },
            { "time": '05:00 PM', "title": 'Gym', "duration": '1 hr', "color": 'bg-purple-600' },
        ],
        "payments": [
            { "title": 'Rent', "amount": '₹15,000', "priority": 'High', "due": 'Due in 2 days • 03 May' },
            { "title": 'Electricity Bill', "amount": '₹2,300', "priority": 'High', "due": 'Due in 4 days • 05 May' },
            { "title": 'Internet Bill', "amount": '₹850', "priority": 'Medium', "due": 'Due in 7 days • 08 May' },
            { "title": 'Credit Card Bill', "amount": '₹8,000', "priority": 'Low', "due": 'Due in 12 days • 13 May' },
        ],
        "workflows": [
            { "title": 'Pay Electricity Bill', "status": 'In Progress', "due": 'Due 05 May' },
            { "title": 'Renew Passport', "status": 'Planning', "due": 'Due 20 May' },
            { "title": 'Exam Preparation', "status": 'In Progress', "due": 'Due 10 May' },
            { "title": 'Tax Filing 2024-25', "status": 'Pending', "due": 'Due 31 July' },
        ],
        "spending": [
            { "name": 'Needs', "value": 18500, "percent": '45%', "color": '#3b82f6' },
            { "name": 'Wants', "value": 12000, "percent": '29%', "color": '#8b5cf6' },
            { "name": 'Subscriptions', "value": 4200, "percent": '10%', "color": '#f97316' },
            { "name": 'Savings', "value": 6300, "percent": '16%', "color": '#10b981' },
        ],
        "notifications": [
            { "source": 'Gmail', "title": 'Electricity bill received from XYZ Energy', "desc": 'Extracted amount ₹2,300, due on 05 May.', "time": '10m ago', "iconColor": 'text-red-500', "bgColor": 'bg-red-100' },
            { "source": 'Calendar', "title": 'Event Reminder: Team Standup', "desc": 'Starts in 30 minutes', "time": '30m ago', "iconColor": 'text-blue-500', "bgColor": 'bg-blue-100' },
            { "source": 'Subscription', "title": 'Canva Subscription renews in 3 days', "desc": 'Amount: ₹499', "time": '1h ago', "iconColor": 'text-purple-500', "bgColor": 'bg-purple-100' },
            { "source": 'Bank', "title": 'Payment successful', "desc": 'Amazon Pay • ₹1,299', "time": '2h ago', "iconColor": 'text-green-500', "bgColor": 'bg-green-100' },
        ],
        "connectedAccounts": [
            { "name": 'Gmail', "status": 'Connected', "icon": 'M' },
            { "name": 'Google Calendar', "status": 'Connected', "icon": '37' },
            { "name": 'Bank Account', "status": 'Connected', "icon": 'Bank' },
        ]
    }
