import * as admin from 'firebase-admin';

admin.initializeApp({
    credential: admin.credential.cert({
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD0P3DYiXo9wLe5\nIGme5T3LM3QYY42CLrri4NL49XKAT4+hR5tz8DNEgIYbMRq4WUC9WaCY2GvgpJ0h\nF9oAaFbdwFAfPSl/JT145HXT4XIUQtEj0Kms1tpmejqDEFJWoNHJKzWL/ZsKSuGy\nROI8+xlKyf4jFgAKanoIDfUwygjpFkvnQ8UJ5PUGvUjzFsHgYFjqLWsMwRYlaHWd\nFJVIqNPL0otuezteKZbpORB9ZdGbtTnjowGVO3WF6AhMIEn3Ik7CAgaEx9vZ2TVX\n4NrzhEtFR+p3MN9UxdO91vNB+pUG1NvNyPgpW227L35AN1XEaxO5Xyb5WHDjB5ry\nl9u3W7k5AgMBAAECggEADgU+Qw/RNo5DfZsAtSBPpcR0W5oLW3e3PqLNOYFNa1Ql\n2Io1wDf/mWUPTaxJ7l8hOj1U3LE/sAuDAY1O9EsJAX2ym7h1E1ld5/ylTt5YIBWd\nz8KAmu1SaCOIDFH5iAN/R171me2a4sJdplAR9JItZ3+k2PrAUdi+3IuAkaZnUInc\nZ4OJzl4/ul0UNdW6wTKDTizb0pZUhS02eJilH8poGgC3VSRLe9hdy2DNATCtDnZ+\nDPq26UsY+V4kbLy1yz7Sq79kbp1rjTyxmJFm0PNmQCH9Hmqxdpu632LouUGcw1WZ\ntISd/MDyEs9goxgAGp01ljB5pfQnVUEbPmlS9R6SIQKBgQD9uYMX3rhvoQaj0r9h\n9RgvKal3BKNG4rBqiUrXN3OZPO0vMcpJJh/fm+9iPIVkQXyUvvqVY2U7coyM4QbZ\nSon7elZOf3yQfyF6G2/8nfR8Km8ANh5WHqE3zkz9l19u7Dg7q9p8JLwT64M2iuIm\ncSVLUKAGl1bALm3ShCfPdbPglQKBgQD2cCwamQBIYkGP1TgrDM/Rg4hO+5XFxHA1\nJP8coCR+/M6tXG1mKiqKRVqH39xT0xtZX2ZsMbM7RNIsa/mOnmYcZMqZznTtz3kR\n2DR7o6rPi4UhNcoBBm10743DTIoioxfcAe05pSeHSNZfOJ+vWfz09D4d52Vcxf3H\n63kSwkzZFQKBgQCn+rMlEYpwNV7NBVE5zGfXibCtoH9tBdYgoobPF+JLuL+bOE6h\nwUDm7Tk+g60YpBaT8CC82NKD2iHdf3nmUGgr+2G6lMLmc5S5YALzb6wWrI1SyYGq\nKJs59DaayiYfrPrJ3sxG1pdCZPE5Ihf5tX0ocNeRpY6Eq/h/oIku29FcRQKBgQCp\n3RW5W57DRd60+p4VpmYUnxo0ftt0jvtc1lx16bheQ3leK2hI1GWwGy/UmiwvJ0Mh\nrk1V5EgLYVuRPPeuI2Z0ydCQhas5RBnKgAFk+6JAHoYsJvxPCpQl1v0bEcXhLBPF\nFRrj8f+2EzGYPtpqrpdabIPobtgCQ4Ky647vrDf2JQKBgQD8z5k7Y9SXxJ5DgL9H\nkXDWfWneOtylXp6krTiA4nfgodvD3wAMShs6lqRAX0iiXWwNhnhEEWcrjKhpS8dD\nq4HvKkFc9HQKJgrixvEYLAKd+GHBVnmApAiN1wPqnR8b0B2rwcv5aN9+/yHOV6UI\nd755AHWTStnhLA9FUH74zhIFUw==\n-----END PRIVATE KEY-----\n",
        projectId: "rest-api-task-8aeb7",
        clientEmail: "firebase-adminsdk-7w4m4@rest-api-task-8aeb7.iam.gserviceaccount.com",
    }),
    databaseURL: "https://rest-api-task.firebaseio.com",
})

const db = admin.firestore();

export {admin, db}