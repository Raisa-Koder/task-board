import { z } from "zod";

export const taskSchema = z.object({
    name: z.string().min(1, "Task name is Required"),
    description: z.string().optional(),
    icon: z.enum(["developer" , "chat" ,"coffee" , "robot" , "books" , "timer"]).optional(),
    status: z.enum(["In Progress", "Completed", "Won't Do"]).optional()
})