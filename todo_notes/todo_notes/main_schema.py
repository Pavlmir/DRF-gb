import graphene
from graphene_django import DjangoObjectType
from todo_app.models import ToDo, Project
from users_app.models import Users


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class UsersType(DjangoObjectType):
    class Meta:
        model = Users
        fields = '__all__'


class Query(graphene.ObjectType):
    all_todo = graphene.List(ToDoType)

    def resolve_all_todo(self, info):
        return ToDo.objects.all()

    all_projects = graphene.List(ProjectType)

    def resolve_all_projects(self, info):
        return Project.objects.all()

    all_users = graphene.List(UsersType)

    def resolve_all_users(self, info):
        return Users.objects.all()

    hello = graphene.String(default_value="Hi!")


schema = graphene.Schema(query=Query)
