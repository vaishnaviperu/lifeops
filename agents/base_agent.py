class BaseAgent:
    def __init__(self, name: str):
        self.name = name

    def process(self, *args, **kwargs):
        raise NotImplementedError("Subclasses must implement the process method.")
