from collections.abc import Iterator
from typing import Any, NoReturn

class JSONEncoder:
    def __init__(self, *args: Any, **kwargs: Any) -> None: ...
    def encode(self, o: Any) -> str: ...
    def default(self, o: Any) -> NoReturn: ...
    def iterencode(self, o: Any, _one_shot: bool = ...) -> Iterator[str]: ...

class JSONEncoderForHTML(JSONEncoder): ...