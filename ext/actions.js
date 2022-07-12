export const createTask = async (args, context) => {
	return context.entities.Task.create({
		data: { description: args.description },
	});
};

export const updateTask = async (args, context) => {
	return context.entities.Task.update({
		where: { id: args.id },
		data: { isDone: args.isDone },
	});
};
